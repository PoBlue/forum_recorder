import rows
import json
from os import listdir
from os.path import isfile, join, splitext

input_path = "input_json"
output_path = "output_csv/"

def get_record_data(data):
    record_data = []
    for elem in data:
        isfounded = False
        for record in record_data:
            if record['title'] == elem['title']:
                record['num'] += 1
                isfounded = True
        if isfounded == False:
            elem['num'] = 1
            record_data.append(elem)
    return record_data

def to_record_csv(json_file_path, output_name):
    with open(json_file_path) as data_file:
        print(json_file_path)
        data = json.load(data_file)
    
    # data = get_record_data(data) # one by one / count sum

    data_table = rows.import_from_dicts(data)
    rows.export_to_csv(data_table, output_path + output_name)

def get_files_name(mypath):
    onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    return onlyfiles

files_name = get_files_name(input_path)
ignore_files = [".DS_Store"]
for name in files_name:
    if name in ignore_files:
        continue
    output_name = splitext(name)[0] + '.csv'
    to_record_csv(input_path + '/' + name, output_name)